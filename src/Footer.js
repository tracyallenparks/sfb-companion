const year = new Date().getFullYear();

const Footer = ({ version }) => {

    return (
        <footer>
            &copy;{year} FOR PERSONAL USE ONLY - Release v.{version}-REACT
        </footer>
    )
}

export default Footer