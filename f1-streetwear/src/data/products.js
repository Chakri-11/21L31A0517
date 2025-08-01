// Product data for F1-inspired streetwear
export const categories = [
  { id: 'tees', name: 'Tees', functional: true },
  { id: 'jackets', name: 'Jackets', functional: false },
  { id: 'caps', name: 'Caps', functional: false },
  { id: 'accessories', name: 'Accessories', functional: false },
  { id: 'limited', name: 'Limited Edition', functional: false }
];

export const products = {
  tees: [
    {
      id: 't1',
      name: 'Monaco GP Racing Tee',
      price: 45,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
      description: 'Premium cotton tee inspired by the Monaco Grand Prix',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Red']
    },
    {
      id: 't2',
      name: 'Speed Lines Tee',
      price: 42,
      image: 'https://images.unsplash.com/photo-1503341733017-1901578f8976?w=300&h=400&fit=crop',
      description: 'Minimalist design with racing-inspired graphics',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray']
    },
    {
      id: 't3',
      name: 'Pit Stop Crew Tee',
      price: 48,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop',
      description: 'Inspired by F1 pit crew uniforms',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Orange']
    },
    {
      id: 't4',
      name: 'Velocity Graphic Tee',
      price: 40,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=400&fit=crop',
      description: 'Dynamic racing graphics on premium fabric',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Blue']
    },
    {
      id: 't5',
      name: 'Championship Winner Tee',
      price: 50,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f86d6?w=300&h=400&fit=crop',
      description: 'Celebrate victory with this premium racing tee',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gold', 'Black', 'White']
    },
    {
      id: 't6',
      name: 'Track Day Essential',
      price: 38,
      image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=400&fit=crop',
      description: 'Perfect for track days and casual wear',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'White']
    }
  ],
  jackets: [
    {
      id: 'j1',
      name: 'Racing Team Bomber',
      price: 120,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
      description: 'Premium bomber jacket with racing team aesthetics',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Red']
    },
    {
      id: 'j2',
      name: 'Speed Windbreaker',
      price: 85,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=300&h=400&fit=crop',
      description: 'Lightweight windbreaker for racing enthusiasts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Blue']
    }
  ],
  caps: [
    {
      id: 'c1',
      name: 'Monaco GP Cap',
      price: 35,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=400&fit=crop',
      description: 'Official Monaco Grand Prix inspired cap',
      sizes: ['One Size'],
      colors: ['Black', 'Red', 'White']
    },
    {
      id: 'c2',
      name: 'Speed Snapback',
      price: 32,
      image: 'https://images.unsplash.com/photo-1575428652377-a4047d3dc0aa?w=300&h=400&fit=crop',
      description: 'Adjustable snapback with racing graphics',
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'Gray']
    }
  ],
  accessories: [
    {
      id: 'a1',
      name: 'Racing Keychain',
      price: 15,
      image: 'https://images.unsplash.com/photo-1567696153798-ca4ba04d5e91?w=300&h=400&fit=crop',
      description: 'Premium metal keychain with F1 design',
      sizes: ['One Size'],
      colors: ['Silver', 'Gold', 'Black']
    },
    {
      id: 'a2',
      name: 'Speed Sunglasses',
      price: 75,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop',
      description: 'Racing-inspired sunglasses with UV protection',
      sizes: ['One Size'],
      colors: ['Black', 'Silver', 'Blue']
    }
  ],
  limited: [
    {
      id: 'l1',
      name: 'Championship Edition Set',
      price: 199,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop',
      description: 'Limited edition championship collection bundle',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gold', 'Black']
    }
  ]
};

export const getAllProducts = () => {
  return Object.values(products).flat();
};

export const getProductsByCategory = (categoryId) => {
  return products[categoryId] || [];
};

export const getProductById = (productId) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === productId);
};