import { useBleContext } from '@/features/ble/BleProvider';
import * as ExpoDevice from 'expo-device';
import React, { FC, useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Device } from 'react-native-ble-plx';

type DeviceModalListItemProps = {
  item: ListRenderItemInfo<Device>;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

type DeviceModalProps = {
  devices: Device[];
  visible: boolean;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

const DeviceModalListItem: FC<DeviceModalListItemProps> = (props) => {
  const { item, connectToPeripheral, closeModal } = props;

  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);

  return (
    <TouchableOpacity
      onPress={connectAndCloseModal}
      style={modalStyle.ctaButton}
    >
      <Text style={modalStyle.ctaButtonText}>
        {item.item.name ?? item.item.localName}
      </Text>
    </TouchableOpacity>
  );
};

const DeviceModal: FC<DeviceModalProps> = (props) => {
  const { devices, visible, connectToPeripheral, closeModal } = props;
  // Detect if running on simulator and using mock BLE

  const ble = useBleContext();

  const isSimulator = ExpoDevice.isDevice === false;
  const isMockBle =
    ble &&
    ble.allDevices.length > 0 &&
    ble.allDevices[0].name === 'Mock Device';
  const isLoading = ble.isScanning || ble.allDevices.length === 0;
  console.log('[DeviceConnectionModal] isSimulator:', isSimulator);
  console.log('[DeviceConnectionModal] isMockBle:', isMockBle);
  console.log('[DeviceConnectionModal] ble.allDevices:', ble?.allDevices);

  const renderDeviceModalListItem = useCallback(
    (item: ListRenderItemInfo<Device>) => {
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
          closeModal={closeModal}
        />
      );
    },
    [closeModal, connectToPeripheral],
  );

  return (
    <Modal
      style={modalStyle.modalContainer}
      animationType='slide'
      transparent={false}
      visible={visible}
    >
      <SafeAreaView style={modalStyle.modalTitle}>
        <Text style={modalStyle.modalTitleText}>
          Tap on a device to connect
        </Text>
        {isLoading && isSimulator && (
          <Text style={modalStyle.loadingText}>Scanning for devices...</Text>
        )}
        <TouchableOpacity style={modalStyle.closeButton} onPress={closeModal}>
          <Text style={modalStyle.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={modalStyle.modalFlatlistContiner}
          data={devices}
          renderItem={renderDeviceModalListItem}
        />
      </SafeAreaView>
    </Modal>
  );
};

const modalStyle = StyleSheet.create({
  loadingText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  mockConnectButton: {
    backgroundColor: '#4CAF50',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  mockConnectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#888',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  modalFlatlistContiner: {
    flex: 1,
    justifyContent: 'center',
  },
  modalCellOutline: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  modalTitle: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  modalTitleText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#FF6060',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DeviceModal;
