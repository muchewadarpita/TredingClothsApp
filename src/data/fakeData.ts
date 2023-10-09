import faker from 'faker';

const fakeData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  price: parseFloat(faker.commerce.price()),
  imageUrl: faker.image.fashion(),
  isWishlist: false,
  rating: faker.random.number({ min: 1, max: 5 }),
}));

export default fakeData;
