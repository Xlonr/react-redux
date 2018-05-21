import { _modal } from './src/comp'
import { VisibleButton } from './src/main'

const routeList = [
    {
        path: '/',
        component: VisibleButton,
        childRoutes: [
            {
                path: 'one/:id', component: _modal
            },
            {
                path: 'two', component: _modal
            }
        ]
    }
]

export {
    routeList
}