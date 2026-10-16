import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import './styles.css'


const NAV = [
    ['/', 'Dashboard'],
] as const


export default function App() {
    return (
        <div className="shell">
            <header className="topbar">
                <span className="title">teca</span>
                <nav>
                    {NAV.map(([to, label]) => (
                        <NavLink key={to} to={to} end={to === '/'}>
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="*" element={<p className="empty">Page Not Found</p>} />
                </Routes>
            </main>
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
