import {reactive, VueElement} from "vue";

interface ItemType {
    key: string | number;
    icon?: any;
    children?: [];
    label: string;
}

function getItem(
    label: string,
    key: string | number,
    icon?: any,
    children?: [],
): Object {
    return {
        key,
        icon,
        children,
        label,
    } as ItemType;
}

const items: ItemType[] = reactive([]);

for (let i = 1; i <= 22; i++) {
    items.push(getItem('菜单' + i, i, null))
}

export default items