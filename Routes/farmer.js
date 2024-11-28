const router = require('express').Router();
const { addProduct, getMyProducts, manageOrder } = require('../Controllers/FarmerController');
const ensureAuthenticated = require('../Middlewares/Auth');
const upload = require('../Middlewares/upload'); // Import Multer middleware

// Add a new product (with image upload)
router.post('/add-product', ensureAuthenticated, upload.single('image'), addProduct);

// View all products listed by the farmer
router.get('/my-products', ensureAuthenticated, getMyProducts);

// Manage orders (accept/reject)
router.patch('/manage-order/:orderId', ensureAuthenticated, manageOrder);

module.exports = router;
