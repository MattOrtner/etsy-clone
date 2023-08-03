import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const InventoryItem = ({
  id,
  image,
  name,
  price,
  description,
  quantity,
  type,
  renewal_option,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [user, dispatch] = useOutletContext();

  const removeProductId = (productID) => {
    const inventory = [];
    for (const id of user.inventory) {
      if (id !== productID) {
        inventory.push(id);
      }
    }
    return inventory;
  };
  const confirmDelete = async (productID) => {
    try {
      const { data: productResponse } = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api/products/${productID}`
      );
      console.log("productResponse", productResponse);
      const newInventory = removeProductId(productID);

      const { data: userResponse } = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/users/${user.id}`,
        { inventory: newInventory }
      );
      console.log("userResponse", userResponse);

      if (productResponse && userResponse) {
        dispatch({ type: "remove-product", payload: productID });
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
        <img src={image} alt={name} width={100} height={"auto"} />
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
        <div>renewal: {renewal_option}</div>
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
