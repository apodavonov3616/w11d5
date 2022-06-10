json.pokemon do
    json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type
    json.image_url asset_path("/images/pokemon_snaps/#{@pokemon.image_url}")
end

json.move do 
    @pokemon.moves.each do |move|
        json.set! move.id do 
            json.extract! move, :id, :name
        end
    end
end

json.items do
    
end