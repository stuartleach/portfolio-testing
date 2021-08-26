import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OneThousandWords from './onethousandwords/OneThousandWords'
import NotFound from './onethousandwords/NotFound'
import Portfolio from './Portfolio'
import Wordcloud from './Wordcloud/Wordcloud'
import Loveleach from './Loveleach/Loveleach'

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Portfolio} />
			<Route path='/onethousandwords' component={OneThousandWords} />
			<Route path='/wordcloud' component={Wordcloud} />
			<Route path='/loveleach' component={Loveleach} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default Router
