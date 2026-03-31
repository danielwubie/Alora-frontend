import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";
import Cart from "../../component/CartCard/Cart";
import { getCartItems, subscribeToCartChanges } from "../../services/cartService";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleStartShopping = () => {
    navigate("/");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };
const BASE_URL=import.meta.env.VITE_BASE_URL
  useEffect(() => {
    let unsubscribe = () => {};

    async function fetchCart() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get(`${BASE_URL}/cart`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCartItems(res.data || []);
        } catch (error) {
          console.error("Error fetching cart:", error);
          setCartItems([]);
        }
      } else {
        setCartItems([]);
        setError(error.message || "Failed to load cart");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCart();

    return () => {
      unsubscribe();
    };
  }, []);

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  const renderCartItems = () => (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: 820 }}>
      {cartItems.map((item) => (
        <Cart key={item.product_id} item={item} onRemove={handleRemoveItem} />
      ))}
    </Stack>
  );

  const renderLoadingCart = () => (
    <Box
      sx={{
        backgroundColor: "#fff7f0",
        borderRadius: 2,
        boxShadow: 2,
        p: 4,
        width: "100%",
        maxWidth: 820,
      }}
    >
      <Stack spacing={3}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <CircularProgress size={30} sx={{ color: "#8b4513" }} />
          <Typography sx={{ color: "#3e2e1f", fontWeight: 600 }}>
            Loading your cart...
          </Typography>
        </Box>

        {[1, 2, 3].map((item) => (
          <Box
            key={item}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              borderRadius: 3,
              backgroundColor: "#faf8f4",
            }}
          >
            <Skeleton
              variant="rounded"
              width={96}
              height={96}
              sx={{ borderRadius: 3, flexShrink: 0 }}
            />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="45%" height={34} />
              <Skeleton variant="text" width="80%" height={26} />
              <Skeleton variant="text" width="30%" height={26} />
            </Box>
            <Box sx={{ minWidth: 90 }}>
              <Skeleton variant="text" width="100%" height={34} />
              <Skeleton variant="text" width="80%" height={24} />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );

  const renderEmptyCart = () => (
    <Box
      sx={{
        backgroundColor: "#fff7f0",
        borderRadius: 2,
        boxShadow: 2,
        p: 4,
        textAlign: "center",
        width: "90%",
        "@media (max-width: 1440px) and (min-width: 1001px) ": {
          width: "75%",
        },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#3e2e1f", fontSize: 20, fontWeight: 400 }}
      >
        Your Cart
      </Typography>

      <Typography variant="body1" sx={{ color: "#3e2e1f", mb: 3 }}>
        You havenâ€™t added any items yet. Browse the menu and add something you love!
      </Typography>

      <Button
        variant="contained"
        onClick={handleStartShopping}
        sx={{
          backgroundColor: "#8b4513",
          "&:hover": { backgroundColor: "#a36a42ff" },
          borderRadius: 3,
          px: 3,
          py: 1,
          "&:focus": { outline: "none", boxShadow: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
      >
        Start Shopping
      </Button>
    </Box>
  );

  return (
    <div className={styles.container}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ alignSelf: "flex-start", mb: 2 }}
      >
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          onClick={handleContinueShopping}
          sx={{
            color: "rgb(61, 41, 20)",
            textTransform: "none",
            "&:hover": { backgroundColor: "#d4c4a8" },
            fontWeight: "600",
            fontSize: 15,
            "&:focus": { outline: "none", boxShadow: "none" },
            "&:focus-visible": { outline: "none", boxShadow: "none" },
          }}
        >
          Continue Shopping
        </Button>
      </Stack>
      <Typography
        className={styles.title}
        variant="body1"
        sx={{ color: "#3e2e1f", fontSize: 24, fontWeight: 700 }}
      >
        Shopping Cart
      </Typography>

      {isLoading ? (
        renderLoadingCart()
      ) : error ? (
        <Typography sx={{ color: "#8b4513", mt: 2 }}>{error}</Typography>
      ) : cartItems.length > 0 ? (
        renderCartItems()
      ) : (
        renderEmptyCart()
      )}
    </div>
  );
};

export default CartPage;
