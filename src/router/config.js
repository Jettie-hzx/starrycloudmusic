

const routes= [
    {
        path: '/',
        name: 'Layout',
        component: () => import('views/Layout'),
        redirect:'/discover/personalrecom'
        
    },
    {
        path:'/discover',
        name:'discover',
        component:()=>import('views/discover/Discover'),
        children:[
            {
                path:'personalrecom',
                name:'personalrecom',
                component:()=>import('views/discover/menuViews/PersonalRecom')
            }
        ]
    }
]
 
export default routes