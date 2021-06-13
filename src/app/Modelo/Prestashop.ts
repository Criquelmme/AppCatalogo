

    export interface Category {
        id: string;
    }

    export interface Image {
        id: string;
    }

    export interface StockAvailable {
        id: string;
        id_product_attribute: string;
    }

    export class Associations {
        categories: Category[];
        images: Image[];
        stock_availables: StockAvailable[];
    }

    export class Product {
        id: number;
        id_manufacturer: string;
        id_supplier: string;
        id_category_default: string;
        new?: any;
        cache_default_attribute: string;
        id_default_image: string;
        id_default_combination: number;
        id_tax_rules_group: string;
        position_in_category: string;
        manufacturer_name: boolean;
        quantity: string;
        type: string;
        id_shop_default: string;
        reference: string;
        supplier_reference: string;
        location: string;
        width: string;
        height: string;
        depth: string;
        weight: string;
        quantity_discount: string;
        ean13: string;
        isbn: string;
        upc: string;
        mpn: string;
        cache_is_pack: string;
        cache_has_attachments: string;
        is_virtual: string;
        state: string;
        additional_delivery_times: string;
        delivery_in_stock: string;
        delivery_out_stock: string;
        on_sale: string;
        online_only: string;
        ecotax: string;
        minimal_quantity: string;
        low_stock_threshold?: any;
        low_stock_alert: string;
        price: string;
        wholesale_price: string;
        unity: string;
        unit_price_ratio: string;
        additional_shipping_cost: string;
        customizable: string;
        text_fields: string;
        uploadable_files: string;
        active: string;
        redirect_type: string;
        id_type_redirected: string;
        available_for_order: string;
        available_date: string;
        show_condition: string;
        condition: string;
        show_price: string;
        indexed: string;
        visibility: string;
        advanced_stock_management: string;
        date_add: string;
        date_upd: string;
        pack_stock_type: string;
        meta_description: string;
        meta_keywords: string;
        meta_title: string;
        link_rewrite: string;
        name: string;
        description: string;
        description_short: string;
        available_now: string;
        available_later: string;
        associations: Associations[];
    }

    export interface RootObject {
        products: Product[];
    }



