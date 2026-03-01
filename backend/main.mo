import Map "mo:core/Map";
import Text "mo:core/Text";

actor {
  type Toy = {
    id : Text;
    name : Text;
    description : Text;
    price : Float;
    category : Text;
  };

  let toysData = Map.empty<Text, Toy>();

  // Add a new toy to the backend storage
  public shared ({ caller }) func addToy(id : Text, name : Text, description : Text, price : Float, category : Text) : async () {
    let toy : Toy = {
      id;
      name;
      description;
      price;
      category;
    };
    toysData.add(id, toy);
  };

  // Retrieve a specific toy by its id
  public query ({ caller }) func getToy(id : Text) : async ?Toy {
    toysData.get(id);
  };

  // Retrieve all toys stored in backend
  public query ({ caller }) func getAllToys() : async [Toy] {
    toysData.values().toArray();
  };
};
