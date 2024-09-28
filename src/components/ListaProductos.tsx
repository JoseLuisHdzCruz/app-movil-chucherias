import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListaProductos.css'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonRow,
  IonCol,
  IonText,
  IonAlert,
} from '@ionic/react';

interface Product {
  productoId: number;
  nombre: string;
  descripcion: string;
  precio: number;
  existencia: number;
  descuento: number;
  categoriaId: number;
  statusId: number;
  imagen: string;
  IVA: number;
  precioFinal: number;
  createdAt: string;
  updatedAt: string;
  ranking: number;
}

const ListaProductos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowAlert(true);
  };

  return (
    <IonPage className='scroll-container'>
      <IonContent>
        {products.length === 0 ? (
          <IonText color="danger">No hay productos disponibles</IonText>
        ) : (
          products.map((product) => (
            <IonCard key={product.productoId} onClick={() => handleProductClick(product)}>
              <IonRow>
                <IonCol size="4">
                  <IonImg src={product.imagen} alt={product.nombre} />
                </IonCol>
                <IonCol size="8">
                  <IonCardHeader>
                    <IonCardTitle>{product.nombre}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <p><strong>Precio:</strong> ${product.precioFinal}</p>
                      {product.descuento > 0 && (
                        <p><strong>Descuento:</strong> {product.descuento}%</p>
                      )}
                      <p><strong>Existencia:</strong> {product.existencia}</p>
                      <p><strong>Ranking:</strong> {product.ranking}/5</p>
                    </IonText>
                  </IonCardContent>
                </IonCol>
              </IonRow>
            </IonCard>
          ))
        )}
        
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={`Detalles de ${selectedProduct?.nombre}`}
          message={selectedProduct ? 
            `Descripción: ${selectedProduct.descripcion}\nPrecio: $${selectedProduct.precioFinal}\nExistencia: ${selectedProduct.existencia}\nRanking: ${selectedProduct.ranking}/5`
            : ''}
          buttons={['Cerrar']}
        />
      </IonContent>
    </IonPage>
  );
};

export default ListaProductos;
