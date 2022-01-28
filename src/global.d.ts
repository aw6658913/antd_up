// 全局变量定义
interface IUPPER_LIMITED {
    max_user?: number;
    max_extension?: number;
    max_dod?: number;
}

interface Window {
    VERSION: string;
    PRODUCT_ID: number;
    OEM_ID: number;
    PRODUCT_TYPE: string;
    COMPANY_NAME: string;
    UPPER_LIMITED: IUPPER_LIMITED;
    $zopim: any;
    NIM: any;
    INTL: any;
    __lang__: any; // 多语言翻译变量
}
