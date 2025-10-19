const productsData = [
  {
    name: 'Educative',
    description: 'Interactive Courses for Software Developers',
    url: 'https://educative.io/',
    numberOfVotes: 10,
    publishedAt: '2021-04-05',
    authorId: '1',
    // This product belongs to the "Education" category
    categoriesIds: ['1']
  },
  {
    name: 'Apollo',
    description: 'The Apollo Data Graph Platform',
    url: 'https://www.apollographql.com/',
    numberOfVotes: 5,
    publishedAt: '2021-01-08',
    authorId: '2',
    // This product belongs to the "Frameworks" and "API" categories
    categoriesIds: ['2', '3']
  },
  {
    name: 'OneGraph',
    description: 'Build Integrations 100x Faster',
    url: 'https://www.onegraph.com',
    numberOfVotes: 5,
    publishedAt: '2020-08-22',
    authorId: '1',
    // This product belongs to the "API" category
    categoriesIds: ['3']
  },
]

const usersData = [
    {
        id: '1',
        userName: 'ellen',
        fullName: 'Ellen James'
    },
    {
        id: '2',
        userName: 'peter',
        fullName: 'Peter Miles'
    },
]

const categoriesData = [
  {
    id: '1',
    slug: 'education',
    name: 'Education',
  },
  {
    id: '2',
    slug: 'frameworks',
    name: 'Frameworks',
  },
  {
    id: '3',
    slug: 'api',
    name: 'API',
  },
]

const resolvers = {
  Query: {
    appName: () => 'ProductHunt clone',

    allProducts: () => {
      return productsData
    },
    productsByAuthor: (_, {authorName}) => {
        const user = usersData.find(user => user.userName === authorName);
        return productsData.filter(product => product.authorId === user.id)

    },
    productsByCategory: (_, {slug}) => {
        //return a list of products that ahve a matching slug category
            //from the slug, get the id that exists in the categories data
            //from the id found, check the categoriesIDs for the existisnac of 

    const category = categoriesData.find(category => category.slug === slug);
        return productsData.filter(product => product.categoriesIds.includes(category.id))
},
    
  }, 

  Product: {
     name: (product) => { //override default resolver behaviour
    return product.name + "!" 
  },
    author: (product) => {
      return usersData.find(user => user.id === product.authorId)
    },
    categories: (product) => {
        const response = product.categoriesIds.map(categoryId => {
            return categoriesData.find(category => category.id === categoryId)
        })
        return response
    }
  },
}


module.exports = {
    resolvers
}