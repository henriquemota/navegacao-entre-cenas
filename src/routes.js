import React from 'react'
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux'

import Home from './pages/home'
import Login from './pages/login'
import Products from './pages/products'
import ProductsDetails from './pages/products-details'
import Register from './pages/register'

export function Route(props) {
  return (
    <Router>
      <Stack key='root'>
        <Scene key='login' component={Login} title='Login' />
        <Scene key='register' component={Register} title='Register' />
        <Scene key='home' component={Home} title='Home' />
        <Scene key='products' component={Products} title='Products' />
        <Scene
          key='productsDetails'
          component={ProductsDetails}
          title='Products Detaiils'
        />
      </Stack>
    </Router>
  )
}
