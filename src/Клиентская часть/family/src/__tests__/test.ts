import ChildModule from "../store/modules/ChildModule"
test('should more then zero', async () => {
    await ChildModule.getResponse();

    expect (ChildModule.getChilds.length).toBe(1);
});
