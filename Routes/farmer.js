const router = require('express').Router();
const { addProduct, getMyProducts, manageOrder } = require('../Controllers/FarmerController');
const ensureAuthenticated = require('../Middlewares/Auth');
const multer = require('multer');
const path = require('path');

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/products/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG images are allowed!'));
    }
  },
});

// Multer error handler
const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ success: false, message: err.message });
  } else if (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next();
};

// Add a new product
router.post('/add-product', ensureAuthenticated, upload.single('image'), multerErrorHandler, addProduct);

// View all products listed by the farmer
router.get('/my-products', ensureAuthenticated, getMyProducts);

// Manage orders (accept/reject)
router.patch('/manage-order/:orderId', ensureAuthenticated, manageOrder);

module.exports = router;
