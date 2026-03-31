# Supabase Setup

This frontend now expects Supabase for auth, database, storage, and realtime.

## 1. Create the project

1. Create a new Supabase project.
2. Wait for the database to finish provisioning.
3. Open `SQL Editor`.
4. Run [`supabase/schema.sql`](/c:/Users/grandson/Documents/GitHub/Alora-frontend/supabase/schema.sql).

That script creates:
- `profiles`
- `categories`
- `subcategories`
- `products`
- `cart_items`
- RLS policies
- a `product-images` storage bucket
- the exact category/subcategory IDs your UI already uses

## 2. Configure auth

Open `Authentication` -> `Providers` -> `Email`.

Recommended for this app:
- Enable email/password sign-in
- Disable email confirmation if you want signup to log the user in immediately

Why: your current signup flow expects a session right away, like the old backend did.

## 3. Add environment variables

Create a local `.env` file in the repo root:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
VITE_SUPABASE_PRODUCTS_BUCKET=product-images
```

You can copy the values from:
- `Project Settings` -> `API`

## 4. Upload product images

Open `Storage` -> `product-images`.

Upload your product images there. In the `products` table, store the file path in `image_path`.

Examples:
- `furniture/sofa-1.jpg`
- `beauty/serum-2.png`
- `toys/block-set.jpg`

The frontend converts `image_path` into a public URL automatically.

## 5. Add products

Open `Table Editor` -> `products` and insert rows with:
- `category_id`
- `subcategory_id`
- `name`
- `description`
- `price`
- `image_path`

Important:
- `category_id` and `subcategory_id` must match the seeded IDs in `supabase/schema.sql`
- `price` is the source of truth; the frontend maps it to the existing `Price` prop

Example row:

```sql
insert into public.products (
  category_id,
  subcategory_id,
  name,
  description,
  price,
  image_path
) values (
  40,
  37,
  'Modern Sofa',
  'Soft fabric sofa for your living room.',
  499.99,
  'furniture/modern-sofa.jpg'
);
```

## 6. Realtime

The cart already uses Supabase realtime in the frontend. After the schema is created, it will work automatically for signed-in users on the `cart_items` table.

## 7. Start the app

```bash
npm run dev
```

## Notes

- Profiles are auto-created from `auth.users` by a database trigger.
- The frontend also upserts profiles defensively, so both paths are covered.
- Public catalog reads work for guests.
- Cart reads/writes are restricted to the signed-in user with RLS.

## IDs your UI depends on

Categories:
- `1` Women's Fashion
- `2` Men's Fashion
- `37` Kid's & Baby
- `38` Beauty & Care
- `39` Home Essentials
- `40` Furniture
- `41` Toys & Games
- `42` Arts & crafts

Subcategories:
- Women's Fashion: `13-17`
- Men's Fashion: `18-22`
- Kid's & Baby: `23-26`
- Beauty & Care: `27-31`
- Home Essentials: `32-36`
- Furniture: `37-41`
- Toys & Games: `42-46`
- Arts & crafts: `47-50`
