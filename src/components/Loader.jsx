import 'ldrs/trefoil'

const Loader = () => {
    return (
        <div className='container-loader'>
            <l-trefoil
            size="150"
            stroke="9"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4"
            color="var(--sky-blue)" 
            ></l-trefoil>
        </div>
    )
}

export default Loader
