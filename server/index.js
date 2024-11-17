const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// TOKEN VERIFICATION
const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.send({ message: "No Token Found" });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.send({ message: "Invalid token" });
    }
    req.decoded = decoded;
    next();
  });
};

// VERIFY SELLER
const verifySeller = async (req, res, next) => {
  const email = req.decoded.email;
  const query = { email: email };
  const user = await userCollection.findOne(query);
  if (user?.role !== "seller") {
    return res.send({ message: "Forbidden access" });
  }
  next();
};

// MONGODB

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.knlt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const userCollection = client.db("gadgetShop").collection("users");
const productsCollection = client.db("gadgetShop").collection("products");

async function dbConnect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // apis
    // JWT
    app.post("/authentication", async (req, res) => {
      const userEmail = req.body;
      const token = jwt.sign(userEmail, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10d",
      });
      res.send({ token });
    });

    // FIND A USER
    app.get("/user/:email", async (req, res) => {
      const query = { email: req.params.email };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    // INSERT USER
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exists" });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // ADD PRODUCTS
    app.post("/add-products", verifyToken, verifySeller, async (req, res) => {
      const product = req.body;
      const result = await productsCollection.insertOne(product);
      res.send(result);
    });
    // GET PRODUCTS
    app.get("/all-products", async (req, res) => {
      // SEARCH BY NAME
      // SORT BY--PRICE, CATEGORY, BRAND
      const { title, sort, Category, brand } = req.query;

      const query = {};
      if (title) {
        query.title = { $regex: title, $options: "i" };
      }
      if (Category) {
        query.Category = { $regex: Category, $options: "i" };
      }
      if (brand) {
        query.brand = brand;
      }
      const sortOpotion = sort === "asc" ? 1 : -1;

      const products = await productsCollection
        .find(query)
        .sort({ price: sortOpotion })
        .toArray();

      const productInfo = await productsCollection
        .find({}, { projection: { Category: 1, brand: 1 } })
        .toArray();

      const totalProducts = await productsCollection.countDocuments(query);

      const brands = [...new Set(productInfo.map((p) => p.brand))];
      const categorys = [...new Set(productInfo.map((c) => c.Category))];

      res.json({ products, brands, categorys, totalProducts });
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
dbConnect().catch(console.dir);

// APIS
app.get("/", (req, res) => {
  res.send("Server is Running");
});

// LISTEN HERE
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
