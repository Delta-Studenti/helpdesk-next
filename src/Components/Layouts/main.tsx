import React from "react"

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MainLayout