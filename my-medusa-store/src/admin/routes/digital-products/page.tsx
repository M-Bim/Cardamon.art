import { defineRouteConfig } from "@medusajs/admin-sdk";
import { PhotoSolid } from "@medusajs/icons";
import { Container, Heading, Table } from "@medusajs/ui";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DigitalProduct } from "../../types";

const DigitalProductsPage = () => {
  const [digitalProducts, setDigitalProducts] = useState<DigitalProduct[]>([]);
  // other imports...
  import { useMemo } from "react";

  const DigitalProductsPage = () => {
    // ...

    const [currentPage, setCurrentPage] = useState(0);
    const pageLimit = 20;
    const [count, setCount] = useState(0);
    const pagesCount = useMemo(() => {
      return count / pageLimit;
    }, [count]);
    const canNextPage = useMemo(
      () => currentPage < pagesCount - 1,
      [currentPage, pagesCount],
    );
    const canPreviousPage = useMemo(() => currentPage > 0, [currentPage]);

    const nextPage = () => {
      if (canNextPage) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    const previousPage = () => {
      if (canPreviousPage) {
        setCurrentPage((prev) => prev - 1);
      }
    };

    // other imports
    import { useEffect } from "react";

    const DigitalProductsPage = () => {
      // ...

      const fetchProducts = () => {
        const query = new URLSearchParams({
          limit: `${pageLimit}`,
          offset: `${pageLimit * currentPage}`,
        });

        fetch(`/admin/digital-products?${query.toString()}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then(({ digital_products: data, count }) => {
            setDigitalProducts(data);
            setCount(count);
          });
      };

      useEffect(() => {
        fetchProducts();
      }, [currentPage]);

      // ...
    };
  };

  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <Heading level="h2">Digital Products</Heading>
        {/* TODO add create button */}
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
      return (
      <Container>
        {/* ... */}
        <Table.Pagination
          count={count}
          pageSize={pageLimit}
          pageIndex={currentPage}
          pageCount={pagesCount}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </Container>
      )
    </Container>
  );
};

export const config = defineRouteConfig({
  label: "Digital Products",
  icon: PhotoSolid,
});

export default DigitalProductsPage;
