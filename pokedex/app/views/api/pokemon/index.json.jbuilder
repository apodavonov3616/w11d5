@pokemons.each do |pokemon|
  json.set! pokemon.id do
    json.extract! pokemon, :id, :name, :attack, :defense, :poke_type
    json.image_url asset_path("/images/pokemon_snaps/#{pokemon.image_url}")
  end
end