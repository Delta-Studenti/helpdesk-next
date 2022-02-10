import React from "react"

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default MainLayout