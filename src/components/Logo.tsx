const Logo = () => {
    return (
        <div className="flex items-center space-x-3 group">
            <div className="relative">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                    <img
                        src="/logo-ims.png"
                        alt="Logo ImSchool"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary bg-clip-text">
                    ImSchool
                </span>
                <span className="text-xs text-muted-foreground">
                    English Academy
                </span>
            </div>
        </div>
    )
}

export default Logo
