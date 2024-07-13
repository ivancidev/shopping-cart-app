import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";

export default function TableProducts() {
  const { listShopping, removeShopping, decrementQuantity, incrementQuantity } =
    useContext(ShoppingContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listShopping.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                {product.title}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="center">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "60%",
                    margin: "0 auto",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{ marginRight: 10 }}
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </Button>
                  {product.quantity}
                  <div>
                    <Button
                      variant="contained"
                      style={{ marginLeft: 10 }}
                      onClick={() => incrementQuantity(product.id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      style={{ marginLeft: 10 }}
                      onClick={() => removeShopping(product.id)}
                    >
                      <Delete />
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell colSpan={3} align="center" sx={{ fontWeight: "bold", fontSize: "18px" }}>
              Total
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold", fontSize: "18px" }}>{listShopping.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>

      <Button onClick={() => window.print()} variant="contained" style={{width: "100%"}} disabled={listShopping.length === 0}>Print</Button>
      </div>
    </TableContainer>
  );
}
