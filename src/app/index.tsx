import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://cdn.motor1.com/images/mgl/Oo3mQo/s3/2023-dodge-charger-and-challenger-mopar-special-edition.jpg',
        }}
        style={styles.carImage}
        resizeMode="cover"
      />

      <View style={styles.overlay} />

      <View style={styles.content}>

        <Text style={styles.smallTitle}>
          BIENVENIDO A
        </Text>

        <Text style={styles.title}>
          CONCESIONARIO
        </Text>

        <Text style={styles.subtitle}>
          Encuentra el vehículo perfecto para ti.
        </Text>

        <Text style={styles.description}>
          Explora nuestros vehículos, conoce sus características
          y encuentra tu próximo automóvil.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => console.log('Comenzar')}
        >
          <Text style={styles.buttonText}>
            COMENZAR
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
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
    backgroundColor: '#000',
  },

  carImage: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    top: 0,
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingBottom: 35,
  },

  smallTitle: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 3,
    marginBottom: 8,
  },

  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 12,
  },

  subtitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 10,
  },

  description: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 25,
  },

  button: {
    height: 58,
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },

  arrow: {
    color: '#000',
    fontSize: 25,
    marginLeft: 12,
  },

  footer: {
    color: '#555',
    fontSize: 12,
    textAlign: 'center',
  },

});