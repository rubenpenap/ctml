import getCategory from "../data/getCategory";
import getItemDescription from "../data/getItemDescription";

export function getSearchParamType(inputValue: string): URLSearchParams {
  const regex = /^MLA\d{1,15}$/;
  if (!inputValue) {
    return new URLSearchParams({});
  }
  if (regex.test(inputValue)) {
    return new URLSearchParams({ ids: inputValue });
  }
  return new URLSearchParams({ search: inputValue });
}

export async function getCategoryForBreadcrumbs(filters: any[]): Promise<string[] | null> {
  const categoryFilter = filters.find(filter => filter.id === "category");
  if (!categoryFilter) {
    return null;
  }
  const categoryWithMoreResultsId = categoryFilter.values.reduce((maxCategory, currentCategory) => {
  return (currentCategory.results > maxCategory.results) ? currentCategory : maxCategory;
}, {results: 0}).id;
  const { path_from_root } = await getCategory({ param: categoryWithMoreResultsId });
  const categories = path_from_root.map((category) => category.name);
  return categories;
}

export function getAmountAndDecimals(price: number): {amount: number, decimals: number} {
  const amount = Math.floor(price)
  const decimals = Math.floor((price - amount) * 100)
  return {amount, decimals};
}

export function getAmountFormatted(amount: number, currency: string): string {
  return Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
  }).format(amount);
}

export function getItems(items: any[]): any[] {
  return items.slice(0, 4).map((item: any) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: getAmountAndDecimals(item.price).amount,
      decimals: getAmountAndDecimals(item.price).decimals,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));
}

export async function getProductFormatted(product: any): any {
  const { plain_text } = await getItemDescription(product.id);
  const sold_quantity = product.sold_quantity ? product.sold_quantity : 0;
    return {
    item: {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: getAmountAndDecimals(product.price).amount,
        decimals: getAmountAndDecimals(product.price).decimals,
      },
    },
    picture: product.pictures[0].url,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
    sold_quantity: sold_quantity,
    description: plain_text,
  };
}
