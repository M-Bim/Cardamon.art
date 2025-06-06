// other imports...
import { Photo } from "@medusajs/icons";
import { ChevronDown } from "@medusajs/icons";
import { LocalizedClientLink } from "@medusajs/medusa-js";
import { AccountNavLink } from "@medusajs/medusa-react";
import { useRouter } from "@medusajs/medusa-js";
import type { Customer } from "@medusajs/medusa-js";

const AccountNav = ({ customer }: { customer: Customer | null }) => {
  const router = useRouter();
  const route = router.pathname;

  return (
    <div>
      <div className="small:hidden">
        {/* ... */}
        {/* Add before log out */}
        <li>
          <LocalizedClientLink
            href="/account/digital-products"
            className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
            data-testid="digital-products-link"
          >
            <div className="flex items-center gap-x-2">
              <Photo />
              <span>Digital Products</span>
            </div>
            <ChevronDown className="transform -rotate-90" />
          </LocalizedClientLink>
        </li>
        {/* ... */}
      </div>
      <div className="hidden small:block">
        {/* ... */}
        {/* Add before log out */}
        <li>
          <AccountNavLink
            href="/account/digital-products"
            route={route}
            data-testid="digital-products-link"
          >
            Digital Products
          </AccountNavLink>
        </li>
        {/* ... */}
      </div>
    </div>
  );
};

export default AccountNav;
