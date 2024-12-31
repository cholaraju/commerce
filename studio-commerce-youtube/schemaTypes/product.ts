import {title} from 'process'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Project',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Prodcut Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descripiton of Project',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Prodcut of slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
     {
      name: 'price_id',
      title: "Stripe Price ID",
      type: 'string'
     },
    {
      name: 'category',
      title: 'Prodcut Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
