import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "./DropDown";
import { instance } from "../Api";
import ProductList from "./ProductList";

function Product() {
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const getUniqueCategories = () => {
    const categories = productData.map((product) => product.category);
    return Array.from(new Set(categories));
  };

  const getProductData = async () => {
    try {
      const response = await instance.get(`userData`);
      if (response.status === 200) {
        setProductData(response.data);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = useMemo(() => {
    const lowerCaseSearch = searchText.toLowerCase();
    return productData
      .filter(
        (product) =>
          product.productName.toLowerCase().includes(lowerCaseSearch) ||
          product.price.toString().toLowerCase().includes(lowerCaseSearch)
      )
      .filter((product) => (category ? product.category === category : true));
  }, [searchText, productData, category]);

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <Container sx={{ padding: "1% 3%" }}>
      <OutlinedInput
        fullWidth
        sx={{ background: "#fff" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        placeholder="Search for products in this collection"
        value={searchText}
        onChange={handleSearchChange}
      />

      <Box sx={{ float: "right", paddingTop: "1%" }}>
        <Box sx={{ float: "right", paddingTop: "1%" }}>
          <Dropdown
            label="Category For You"
            list={getUniqueCategories()}
            name="categoryType"
            value={category}
            handleChange={handleCategoryChange}
          />
        </Box>
      </Box>

      {currentProducts.length >= 1 ? (
        <Box sx={{ paddingTop: "7%" }}>
          <Grid container spacing={2}>
            {currentProducts.map((product) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
                <ProductList product={product} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 3 }} />
          <div style={{ textAlign: "center" }}>
            {Array.from({
              length: Math.ceil(filteredProducts.length / productsPerPage),
            }).map((_, index) => (
              <Button
                key={index}
                variant="outlined"
                sx={{
                  width: "40px",
                  borderRadius: "50%",
                  margin: "0 5px",
                  backgroundColor:
                    currentPage === index + 1 ? "#2196f3" : "transparent",
                  color: currentPage === index + 1 ? "#fff" : "#000",
                }}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </Box>
      ) : (
        <Box sx={{ paddingTop: "7%", textAlign: "center" }}>
          No matching products found.
        </Box>
      )}
    </Container>
  );
}

export default Product;
