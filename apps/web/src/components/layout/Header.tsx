export function Header() {
    return (
        <header>
            <div className="border-b py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div>Intelligent Doc Processor</div>
                    <nav className="hidden md:block">
                        <ul className="flex gap-4">
                            <li>Documents</li>
                            <li>Dashboard</li>
                            <h1>Hello, {user.name}</h1>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}