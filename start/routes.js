'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

/** Authentication */
Route.group(() => {
  Route.post('/signup', 'Authentication/AuthController.signUp').validator('SignUp');
  Route.post('/login', 'Authentication/AuthController.logIn').validator('Login');
})
  .prefix('/auth')
  .middleware(['guest']);

/** Product */
Route.group(() => {
  Route.post('/create', 'Product/ProductController.createProduct').validator('Product');
  Route.get('/read/:product_id', 'Product/ProductController.readProduct');
  Route.patch('/update/:product_id', 'Product/ProductController.updateProduct');
  Route.delete('/delete/:product_id', 'Product/ProductController.deleteProduct');
})
  .prefix('/product')
  .middleware(['auth']);

/** Product Category */
Route.group(() => {
  Route.post('/create', 'Product/ProductController.createProductCategory').validator('ProductCategory');
  Route.get('/read/:product_category_id', 'Product/ProductController.readProductCategory');
  Route.patch('/update/:product_category_id', 'Product/ProductController.updateProductCategory');
  Route.delete('/delete/:product_category_id', 'Product/ProductController.deleteProductCategory');
})
  .prefix('/productCategory')
  .middleware(['auth']);

/** Product Sub Category */
Route.group(() => {
  Route.post('/create', 'Product/ProductController.createProductSubCategory').validator('ProductSubCategory');
  Route.get('/read/:product_sub_category_id', 'Product/ProductController.readProductSubCategory');
  Route.patch('/update/:product_sub_category_id', 'Product/ProductController.updateProductSubCategory');
  Route.delete('/delete/:product_sub_category_id', 'Product/ProductController.deleteProductSubCategory');
})
  .prefix('/productSubCategory')
  .middleware(['auth']);

Route.any('*', ({ response }) => {
  response.status(404).send('Route not found');
});
