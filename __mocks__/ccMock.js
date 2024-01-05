
const _decorator = {
    ccclass: jest.fn(() => {
        // 這裡可以添加任何您希望模擬的行為或返回的值
        return (target) => {
            // 模擬 ccclass 的行為，例如將一些屬性添加到目標類
            target.__ccclassMocked = true;
        };
    }),
    property: jest.fn(() => {
        return (target) => {
            // 模擬 ccclass 的行為，例如將一些屬性添加到目標類
            target.__propertyMocked = true;
        };
    }),
    // 您還可以添加其他 _decorator 提供的裝飾器模擬
};

// 在您的 Jest 測試文件或設置中
const cc = {
    // 這裡您可以添加模擬的 'cc' 對象的屬性或方法
    Node: jest.fn(),
    // ...其他模擬的屬性或方法
    Component: jest.fn(),
    _decorator: _decorator
};

module.exports = cc;