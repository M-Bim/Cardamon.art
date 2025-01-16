import { defineRouteConfig } from "@medusajs/admin-sdk";
import { PhotoSolid } from "@medusajs/icons";
import { Container, Heading, Table, Drawer, Button } from "@medusajs/ui";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DigitalProduct } from "../../types";
import CreateDigitalProductForm from "../../components/create-digital-product-form";

const DigitalProductsPage = () => {
  const [digitalProducts, setDigitalProducts] = useState<DigitalProduct[]>([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = async () => {
    // TODO implement fetch products
  };

  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <Heading level="h2">Digital Products</Heading>
        <Drawer
          open={open}
          onOpenChange={(openChanged: boolean) => setOpen(openChanged)}
        >
          <Drawer.Trigger
            onClick={() => {
              setOpen(true);
            }}
            asChild
          >
            <Button>Create</Button>
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Create Product</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <CreateDigitalProductForm
                onSuccess={() => {
                  setOpen(false);
                  if (currentPage === 0) {
                    fetchProducts();
                  } else {
                    setCurrentPage(0);
                  }
                }}
              />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer>
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {digitalProducts.map((digitalProduct) => (
            <Table.Row key={digitalProduct.id}>
              <Table.Cell>{digitalProduct.name}</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/products/${digitalProduct.product_variant?.product_id}`}
                >
                  View Product
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* TODO add pagination component */}
    </Container>
  );
};

export const config = defineRouteConfig({
  label: "Digital Products",
  icon: PhotoSolid,
});

export default DigitalProductsPage;
