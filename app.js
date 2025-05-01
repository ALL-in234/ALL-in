import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';

const MainScreen = ({ onShopClick, onGamesClick, onCalendarClick }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>ALL IN</Text>
      <View style={styles.profileIcon} />
    </View>
    <View style={styles.balanceCard}>
      <Text style={styles.balanceLabel}>帳戶餘額</Text>
      <View style={styles.balanceRow}>
        <Text style={styles.balanceAmount}>HKD $10000</Text>
        <Text style={styles.balanceChange}>+$120</Text>
      </View>
    </View>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.shopButton} onPress={onShopClick}>
        <Text style={styles.buttonText}>商店</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gamesButton} onPress={onGamesClick}>
        <Text style={styles.buttonText}>遊戲 / 活動</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.floatingButton} onPress={onCalendarClick}>
      <Text style={styles.floatingButtonText}>+</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const ShopScreen = ({ onBackClick }) => {
  const shopItems = [
    { id: '1', title: '房屋', color: '#EF4444' },
    { id: '2', title: '汽車', color: '#2DD4BF' },
    { id: '3', title: '股票', color: '#8B5CF6' },
    { id: '4', title: '加密貨幣', color: '#22C55E' },
    { id: '5', title: '服裝', color: '#06B6D4' },
    { id: '6', title: '寵物', color: '#FEF08A' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.icon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ALL IN</Text>
        <View style={styles.profileIcon} />
      </View>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>帳戶餘額</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceAmount}>HKD $10000</Text>
          <Text style={styles.balanceChange}>+$120</Text>
        </View>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
          <Text style={styles.buttonText}>返回</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={shopItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.shopItem, { backgroundColor: item.color }]}
          >
            <Text style={styles.shopItemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.shopGrid}
      />
    </SafeAreaView>
  );
};

const GamesScreen = ({ onBackClick }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>ALL IN</Text>
      <View style={styles.profileIcon} />
    </View>
    <View style={styles.balanceCard}>
      <Text style={styles.balanceLabel}>帳戶餘額</Text>
      <View style={styles.balanceRow}>
        <Text style={styles.balanceAmount}>HKD $10000</Text>
        <Text style={styles.balanceChange}>+$120</Text>
      </View>
    </View>
    <View style={styles.backButtonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
        <Text style={styles.buttonText}>返回</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const CalendarScreen = ({ onBackClick, onAddExpenseClick }) => {
  const [focusedDate, setFocusedDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();

  const firstDayOfMonth = new Date(
    focusedDate.getFullYear(),
    focusedDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    focusedDate.getFullYear(),
    focusedDate.getMonth() + 1,
    0
  );
  const firstDayWeekday = firstDayOfMonth.getDay();

  const previousMonth = () => {
    setFocusedDate(
      new Date(focusedDate.getFullYear(), focusedDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setFocusedDate(
      new Date(focusedDate.getFullYear(), focusedDate.getMonth() + 1, 1)
    );
  };

  const selectDate = date => {
    setSelectedDate(date);
  };

  const days = [];
  for (let i = 0; i < firstDayWeekday; i++) {
    days.push(<View key={`empty-${i}`} style={styles.calendarEmpty} />);
  }

  for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
    const currentDate = new Date(
      focusedDate.getFullYear(),
      focusedDate.getMonth(),
      day
    );
    const isSelected = currentDate.toDateString() === selectedDate.toDateString();
    const isToday = currentDate.toDateString() === today.toDateString();

    days.push(
      <TouchableOpacity
        key={day}
        onPress={() => selectDate(currentDate)}
        style={[
          styles.calendarDay,
          isSelected && styles.selectedDay,
          isToday && styles.todayDay,
        ]}
      >
        <Text style={styles.dayText}>{day}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#B2E4C9' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackClick}>
          <Text style={styles.icon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ALL IN</Text>
        <View style={styles.profileIcon} />
      </View>
      <View style={styles.calendarCard}>
        <View style={styles.calendarHeader}>
          <Text style={styles.monthText}>{`${focusedDate.getMonth() + 1
            }月 ${focusedDate.getFullYear()}`}</Text>
          <View style={styles.monthButtons}>
            <TouchableOpacity onPress={previousMonth}>
              <Text style={styles.monthButton}>❮</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextMonth}>
              <Text style={styles.monthButton}>❯</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.weekDays}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <Text key={index} style={styles.weekDayText}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.calendarGrid}>{days}</View>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={onAddExpenseClick}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const ExpenseScreen = ({ onBackClick }) => {
  const [expenses, setExpenses] = useState({
    bill: '',
    prize: '',
    dinner: '',
    snack: '',
    drink: '',
  });

  const handleInputChange = (key, value) => {
    setExpenses(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const totalExpense = Object.values(expenses)
    .filter(val => val !== '')
    .reduce((sum, val) => sum + parseFloat(val || 0), 0);

  const expenseItems = [
    { key: 'bill', label: '早餐' },
    { key: 'prize', label: '午餐' },
    { key: 'dinner', label: '晚餐' },
    { key: 'snack', label: '零食' },
    { key: 'drink', label: '飲料' },
  ];

  const handleSave = () => {
    alert('開支已保存');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackClick}>
          <Text style={styles.icon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>開支</Text>
        <View style={styles.profileIcon} />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>✓</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>本日開銷總度</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceAmount}>HKD ${totalExpense}</Text>
          <Text style={styles.balanceChange1}>-${totalExpense}</Text>
          
        

        </View>
      </View>
      <View style={styles.expenseList}>
        {expenseItems.map(item => (
          <View key={item.key} style={styles.expenseRow}>
            <View style={styles.expenseLabelContainer}>
              <Text style={styles.expenseLabel}>{item.label}</Text>
            </View>
            <TextInput
              style={styles.expenseInput}
              keyboardType="numeric"
              value={expenses[item.key]}
              onChangeText={value => handleInputChange(item.key, value)}
              placeholder="0"
              placeholderTextColor="#9CA3AF"
              
            />
          </View>
          
        ))}
      </View>
    </SafeAreaView>

  );
};



const App = () => {
  const [screen, setScreen] = useState('main');

  const handleShopClick = () => setScreen('shop');
  const handleGamesClick = () => setScreen('games');
  const handleCalendarClick = () => setScreen('calendar');
  const handleAddExpenseClick = () => setScreen('expense');
  const handleBackClick = () => {
    if (screen === 'expense') {
      setScreen('calendar');
    } else {
      setScreen('main');
    }
  };

  return (
    <>
      {screen === 'main' && (
        <MainScreen
          onShopClick={handleShopClick}
          onGamesClick={handleGamesClick}
          onCalendarClick={handleCalendarClick}
        />
      )}
      {screen === 'shop' && <ShopScreen onBackClick={handleBackClick} />}
      {screen === 'games' && <GamesScreen onBackClick={handleBackClick} />}
      {screen === 'calendar' && (
        <CalendarScreen onBackClick={handleBackClick} onAddExpenseClick={handleAddExpenseClick} />
      )}
      {screen === 'expense' && <ExpenseScreen onBackClick={handleBackClick} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#D1D5DB',
    borderRadius: 16,
  },
  balanceCard: {
    backgroundColor: '#000',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  balanceLabel: {
    color: '#FFF',
    fontSize: 14,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceAmount: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceChange1: { //飲食
    color: '#EF4444',
    fontSize: 24,
    fontWeight: 'bold',
  },

  balanceChange: { //主頁
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
  },
  shopButton: {
    flex: 1,
    backgroundColor: '#EC4899',
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: 'center',
  },
  gamesButton: {
    flex: 1,
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#14B8A6',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonText: {
    color: '#FFF',
    fontSize: 24,
  },
  backButtonContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  backButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 9999,
  },
  shopGrid: {
    paddingHorizontal: 16,
  },
  shopItem: {
    flex: 1,
    margin: 8,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  shopItemText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarCard: {
    backgroundColor: '#FFF',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  monthButtons: {
    flexDirection: 'row',
  },
  monthButton: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekDayText: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarEmpty: {
    width: `${100 / 7}%`,
    padding: 8,
  },
  calendarDay: {
    width: `${100 / 7}%`,
    padding: 8,
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#BFDBFE',
    borderRadius: 9999,
  },
  todayDay: {
    borderWidth: 2,
    borderColor: '#EF4444',
    borderRadius: 9999,
  },
  dayText: {
    fontSize: 16,
  },
  expenseList: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  expenseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  expenseLabelContainer: {
    flex: 1,
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 16,
  },
  expenseLabel: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expenseInput: {
    flex: 2,
    backgroundColor: '#D1D5DB',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },

  saveButton: {
    position: 'absolute',
    top: 450, // y=690，距離頂部 690 像素
    left: 160, // x=159，距離左邊 159 像素
    width: 68,
    height: 48,
    backgroundColor: '#A855F7', // 紫色，符合設計稿
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
