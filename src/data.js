const data = {
  company: 'Sneaker Company',
  Title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  images: {
    path: 'assets/img',
    // eslint-disable-next-line no-template-curly-in-string
    template: '${Path}/${Image}${Thumbnail}.jpg',
    images: [
      'image-product-1',
      'image-product-2',
      'image-product-3',
      'image-product-4',
    ],
  },
};

export default data;
