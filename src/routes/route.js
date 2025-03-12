import { lazy } from 'react'
import GrievanceReview from 'src/pages/review'
import GrievanceView from 'src/pages/review/view'
const PageNotFound = lazy(()=>import('src/components/PageNotFound'))
const SignIn = lazy(()=>import('src/pages/auth/signin'))
const Dashboard = lazy(()=>import('src/pages/dashboard'))
const Employee = lazy(()=>import('src/pages/employee'))
const Grievance = lazy(()=> import('src/pages/grievance'))
const GrievanceAddEdit = lazy(()=>import('src/pages/grievance/AddEdit'))
const History = lazy(()=>import('src/pages/history'))
const ClosedGrievances = lazy(()=>import('src/pages/closed'))

export const publicRoutes = [
    {
        path: '*',
        component: PageNotFound,
    },
];

export const protectedRoutes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/employee',
        component: Employee
    },
    {
        path: '/grievance',
        component: Grievance, 
        childRoutes: [
            {
                path: '/grievance/add',
                component: GrievanceAddEdit
            },
            {
                path: '/grievance/view/:id',
                component: GrievanceAddEdit
            },
        ]
    },
    {
        path: '/history',
        component: History
    },
    {
        path:"/grievance-review",
        component:GrievanceReview,
        childRoutes: [
            {
                path: '/grievance/review/:id',
                component: GrievanceView
            },
          
        ]
    },
    {
        path: '/closed/grievance',
        component: ClosedGrievances, 
    },
];
