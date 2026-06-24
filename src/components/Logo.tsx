const Logo = () => {
    return (
        <a href="#" aria-label="Im School — início" className="group inline-flex items-center gap-3 text-white">
            <img
                src="/modern.png"
                alt=""
                width={818}
                height={825}
                className="h-11 w-11 rounded-[0.8rem] object-cover drop-shadow-[0_8px_20px_rgba(0,0,0,.28)] sm:h-12 sm:w-12"
            />
            <span className="font-editorial text-lg leading-none tracking-[0.04em] sm:text-xl">
                IM SCHOOL
            </span>
        </a>
    );
};

export default Logo;
