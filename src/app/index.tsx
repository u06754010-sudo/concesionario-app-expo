
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    // Estados 
    const [nombre, setNombre]=useState (''); 
    const [carros, setCarros]=useState (''); 
    const [presupuesto,setPresupuesto]=useState ('');
    const [precio, setPrecio]=useState (''); 
    const [modalvisible, setModalvisible]=useState ('false'); 

    //Funcion de botones 
    const Realizar compra = () => {
    // validamos campos que tengan informacion 
    if(
      nombre.trim() == '' || 
      carros.trim() == '' || 
      presupuesto.trim() == ''
    ){
      setResultados ('
        debe completar todos los campos.
        ')
    }return;
    //mostramos indicador de carga 
    setProcesando (true);
    setResultado (true);

    //simulacion del proceso 
    setTimeout(() => {
       setProcesando(false)
       setResultado(
        'cliente: ${nombre}
        carros:${carros}


       )



       // abrimos modal 








       return(
        keyboardaviodingview
        style={styles.pantalla}
        behavior=

       )
    })

    }




      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Imagen principal */}
      <Image
        source={{
          uri: 'https://cdn.motor1.com/images/mgl/Oo3mQo/s3/2023-dodge-charger-and-challenger-mopar-special-edition.jpg',
        }}
        style={styles.carImage}
        resizeMode="cover"
      />

      {/* Degradado visual */}
      <View style={styles.overlay} />

      {/* Contenido */}
      <View style={styles.content}>
        <Text style={styles.smallTitle}>BIENVENIDO A</Text>

        <Text style={styles.title}>CONCESIONARIO</Text>

        <Text style={styles.subtitle}>
          Encuentra el vehículo perfecto para ti.
        </Text>

        <Text style={styles.description}>
          Explora nuestros vehículos, conoce sus características
          y encuentra tu próximo automóvil.
        </Text>

        {/* Botón */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => console.log('Comenzar presionado')}
        >
          <Text style={styles.buttonText}>COMENZAR</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Ingeniería de Sistemas
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  carImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '58%',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '65%',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingBottom: 35,
  },

  smallTitle: {
    color: '#aaaaaa',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 3,
    marginBottom: 8,
  },

  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 12,
  },

  subtitle: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 10,
  },

  description: {
    color: '#a8a8a8',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 25,
    maxWidth: 330,
  },

  button: {
    height: 58,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginBottom: 25,
  },

  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },

  arrow: {
    color: '#000000',
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 12,
    marginTop: -2,
  },

  footer: {
    color: '#555555',
    fontSize: 12,
    textAlign: 'center',
  },
});