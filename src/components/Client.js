import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cttzypucrabygasrdwlo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dHp5cHVjcmFieWdhc3Jkd2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MTc3ODEsImV4cCI6MTk5MTE5Mzc4MX0.jR62CNaGtr4uDzBLLgvnAKkedVBy_Jd2P_Xwr0o0WZA'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBrothers(){
    let { data: Brothers, error } = await supabase
      .from('Brothers')
      .select('*')

      console.log(error)
      console.log(Brothers)
}


  /*
    FAMILY TREE DATA SERVICE
      Takes:
        Nothing
      Sends:
        A javascript object (var familyTreeData) that implements the following format:
          {
            founders: ['founderid1', 'founderid2', ...],
            members: [
              memberid1: {
                roll: #,
                img: 'url/to/profile/img.png', (file format not relevant)
                name: "first last",
                role: 'alumni|active|pledge',
                pledge_class: 'pledge class',
                children: ['childid1', 'childid2', ...]
              },
              memberid2: { ... },
              ...
            ]
          }
        A javascript object (var prefixIndex) thta implements the following format:
          {
            "prefix1": [
              "userid1",
              "userid2",
              ...
            ],
            "prefix2": [...],
            ...
          }
      Returns:
        An associatve array that describes the founder data in the above json:
        [
          "FounderId1" => [
            "roll" => #,
            "img" => 'url/to/profile/img.png', (file format not relevant)
            "name" => "first last",
            "role" => 'alumni',
            "pledge_class" => 'Founder',
            "biguserid" => "biguserid",
            children => ['childid1', 'childid2', ...]
          ],
          "FounderID2" => [...],
          ...
        ]
      Note: The founders are returned separately from the rest of the members in order
        to make the algorithim more performant when building out the tree
  */


  // get all backend: connect supabase, getLittle returning correcty
  // set up a react componenet, automatically shows founders
  // when clicked -> calls get Little with current bro

const brother = {
    uniqname: "jdoe",
    firstName: "John",
    lastName: "Doe",
    little: async function() {
        let { data: littles, error } =  await supabase
          .from('BigLittlePairings')
          .select('*')
          .eq("biguserid", this.uniqname)
        return littles
    }
};

async function getLittle(bro) {
  let littles = [];

  let { data: query_littles, error } =  await supabase
    .from('BigLittlePairings')
    .select('*', 'Brothers(*)')
    .eq('biguserid', bro.uniqname)

  console.log(query_littles)
  
  // console.log(littles)
  return littles
}

async function getFounders() {
  let founders = [];

  let { data: Brothers, error } = await supabase
    .from('Brothers')
    .select('*')
    .lt("roll", 9)
 
    for (var i = 0; i < Brothers.length; i++) {
      var brother = {'uniqname': Brothers[i].userid, 'firstname': Brothers[i].firstname, 'lastname': Brothers[i].lastname, 'little': []};
      founders.push(brother)
  }
  return founders
}

export { getBrothers, getFounders, getLittle }