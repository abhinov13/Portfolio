import { useInView } from "react-intersection-observer"

const WildCardViewHandler = () => {
    const [ref, inView] = useInView({threshold: 1, delay: 300});
    return {
        ref,
        inView        
    }
}

export default WildCardViewHandler;