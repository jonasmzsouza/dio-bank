import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("should return the object in localStorage with the key diobank", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("should create the object in localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("should change object value in localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
