import {UserBusiness} from "../src/business/UserBusiness"
import {TokenGenerator} from "../src/services/tokenGenerator"
import {HashGenerator} from "../src/services/hashGenerator"
import {IdGenerator} from "../src/services/idGenerator"

describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {getUserById:jest.fn(async(id:string)=>undefined)}as any;
    let hashGenerator = {hash:jest.fn(),compareHash:jest.fn()} as HashGenerator;
    let tokenGenerator = {generate:jest.fn(()=>"token"), verify:jest.fn()} as TokenGenerator;
    let idGenerator = {generate:jest.fn(()=> "bananinha")} as IdGenerator
    test("Should return 'User not found' when user does not exist", async () => {
      expect.assertions(2);
      try {

        const getUserById = jest.fn();
        userDatabase = { getUserById };
  
        const userBusiness = new UserBusiness(
          userDatabase,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getUserById("invalid-id");
      } catch (err) {
        expect(err.statusCode).toBe(404);
        expect(err.message).toBe("User not found");
      }
    });
  });



  describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'User not found' when user does not exist", async () => {
        
      const getUserById = jest.fn(
        (id: string) =>
          new User(
            "id",
            "Astrodev",
            "astrodev@gmail.com",
            "hash",
            stringToUserRole("ADMIN")
          )
      );
  
      userDatabase = { getUserById };
  
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );
  
      const user = await userBusiness.getUserById("id");
  
      expect(getUserById).toHaveBeenCalledWith("id");
      expect(user).toEqual({
        id: "id",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: UserRole.ADMIN,
      });
    });
  });