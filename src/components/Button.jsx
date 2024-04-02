import { useTheme } from '../themes/ThemeContext';
function boton() {
    const { cambioTema } = useTheme();
    return (<><button onClick={cambioTema}>Cambiar tema </button></>)
}
export default boton