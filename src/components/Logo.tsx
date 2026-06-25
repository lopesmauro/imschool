const Logo = () => {
    return (
        <a href="#" aria-label="Im School — início" className="group inline-flex items-center gap-2.5 text-white">
            <img
                src="/modern.png"
                alt=""
                width={818}
                height={825}
                className="h-8 w-8 rounded-[0.62rem] object-cover drop-shadow-[0_8px_20px_rgba(0,0,0,.22)] sm:h-9 sm:w-9"
            />
            <span className="text-base font-extrabold leading-none tracking-[0.02em] sm:text-lg">
                IM School
            </span>
        </a>
    );
};

export default Logo;
