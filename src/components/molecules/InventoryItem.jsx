import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const InventoryItem = ({
  id,
  images,
  name,
  price,
  description,
  quantity,
  type,
  renewalOption,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [user, dispatch] = useOutletContext();

  const confirmDelete = async (productId) => {
    try {
      const { data: productResponse } = await axios.delete(
        `${process.env.REACT_APP_API_URL}api/products/delete-product`,
        { data: { productId: productId, userId: user.id } }
      );

      if (productResponse) {
        dispatch({ type: "remove-product", payload: productId });
      }
    } catch (error) {
      console.error(error, "error");
    }
  };
  const cancelleRemove = () => {
    setIsDeleting(false);
  };
  const handleRemove = () => {
    setIsDeleting(true);
  };
  return (
    <ProductContainer key={id}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src={images[0]} alt={name} width={100} height={"auto"} />
        {isDeleting ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <button style={{}} onClick={cancelleRemove}>
              X
            </button>
            <button
              style={{ backgroundColor: "red", height: "1.5rem" }}
              onClick={() => confirmDelete(id)}
            >
              DELETE
            </button>
          </div>
        ) : (
          <button style={{ height: "1.5rem" }} onClick={() => handleRemove()}>
            Remove
          </button>
        )}
      </div>
      <div>{name}</div>
      <div>${price}.00</div>
      <div>{description}</div>
      <DetailContainer>
        <div>quantity: {quantity}</div>
        <div>renewal: {renewalOption}</div>
        <div>type: {type}</div>
      </DetailContainer>
    </ProductContainer>
  );
};
export default InventoryItem;

const DetailContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const ProductContainer = styled.div`
  border: 2px solid gray;
  padding: 10px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  gap: 5px;
  width: 250px;
`;
