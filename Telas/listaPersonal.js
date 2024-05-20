import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import searchIcon from "../Imagens/lupa.png";
import unpressIcon from "../Imagens/selectbranco.png"; // Ícone quando o aluno não está selecionado
import pressIcon from "../Imagens/selectverde.png"; // Ícone quando o aluno está selecionado

const ListaPersonal = () => {
  const [search, setSearch] = useState("");
  const [searchExisting, setSearchExisting] = useState("");
  const [selectedAlunoId, setSelectedAlunoId] = useState(null);
  const [alunos, setAlunos] = useState([]);
  const [alunosExistentes, setAlunosExistentes] = useState([
    { id: "1", nome: "Marcelo" },
    { id: "2", nome: "Gabriel" },
    { id: "3", nome: "Luiz" },
  ]);

  const filteredExistingStudents = alunosExistentes.filter((aluno) =>
    aluno.nome.toLowerCase().includes(searchExisting.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Adicionar Alunos</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar aluno cadastrado"
            placeholderTextColor="#000"
            value={search}
            onChangeText={setSearch}
          />
          <Image source={searchIcon} style={[styles.searchIcon, styles.greenTint]} />
        </View>
        <FlatList
          data={alunos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.alunoItem}>
              <Text style={styles.alunoText}>{item.nome}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>Nenhum aluno adicionado</Text>
          }
        />
        <Text style={styles.title}>Selecionar Aluno para Alterar Plano</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar aluno existente"
            placeholderTextColor="#000"
            value={searchExisting}
            onChangeText={setSearchExisting}
          />
          <Image source={searchIcon} style={[styles.searchIcon, styles.greenTint]} />
        </View>
        <FlatList
          data={filteredExistingStudents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.alunoItem}
              onPress={() => setSelectedAlunoId(item.id)}
            >
              <Image
                source={selectedAlunoId === item.id ? pressIcon : unpressIcon}
                style={styles.selectIcon}
              />
              <Text style={styles.alunoText}>{item.nome}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>Nenhum aluno encontrado</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 30,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#808080",
    borderColor: "#ccc",
    borderWidth: 0,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#808080",
    paddingLeft: 10,
    color: "#000",
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  greenTint: {
    tintColor: "#3EA519",
  },
  alunoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
  selectIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  alunoText: {
    fontSize: 16,
    color: "#fff",
  },
  emptyListText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
});

export default ListaPersonal;
