import React, { useState } from 'react'

const AddressPage = () => {
  const [addresses, setAddresses] = useState([{ id: 1, name: 'Adil', phone: '+91 8848017132', address: 'India, Malappuram, Areekode', isDefault: true }]);
  const [newAddress, setNewAddress] = useState({ name: '', phone: '', address: '', isDefault: false });
  const [showForm, setShowForm] = useState(false);

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddress.name && newAddress.phone && newAddress.address) {
      const updated = newAddress.isDefault ? addresses.map(a => ({ ...a, isDefault: false })) : addresses;
      setAddresses([...updated, { ...newAddress, id: Date.now() }]);
      setNewAddress({ name: '', phone: '', address: '', isDefault: false });
      setShowForm(false);
    }
  };

  const handleSetDefault = (id) => setAddresses(prev => prev.map(addr => ({ ...addr, isDefault: addr.id === id })));
  const handleDeleteAddress = (id) => addresses.find(a => a.id === id)?.isDefault && addresses.length > 1 && (addresses[0].isDefault = true);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-primary text-2xl font-bold">My Addresses</h1>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dull">+ Add Address</button>
      </div>

      {showForm && (
        <div className="bg-white border rounded-xl p-6 mb-6">
          <h2 className="text-primary text-lg font-semibold mb-4">Add New Address</h2>
          <form onSubmit={handleAddAddress} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" value={newAddress.name} onChange={(e) => setNewAddress(p => ({ ...p, name: e.target.value }))} className="p-3 border rounded-lg focus:ring-2 focus:ring-black" required />
              <input type="tel" placeholder="Phone Number *" value={newAddress.phone} onChange={(e) => setNewAddress(p => ({ ...p, phone: e.target.value }))} className="p-3 border rounded-lg focus:ring-2 focus:ring-black" required />
            </div>
            <textarea placeholder="Complete Address *" value={newAddress.address} onChange={(e) => setNewAddress(p => ({ ...p, address: e.target.value }))} rows="3" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" required />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={newAddress.isDefault} onChange={(e) => setNewAddress(p => ({ ...p, isDefault: e.target.checked }))} className="w-4 h-4" />Set as default</label>
              <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dull">Save Address</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div key={addr.id} className={`border rounded-xl p-5 ${addr.isDefault ? 'border-black border-2' : ''}`}>
            {addr.isDefault && <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full mb-3">Default</span>}
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{addr.name}</h3>
                <div className="flex gap-2">
                  <button onClick={() => handleSetDefault(addr.id)} className="text-sm text-blue-600 hover:text-blue-800">{addr.isDefault ? 'Default' : 'Set Default'}</button>
                  <button onClick={() => window.confirm('Delete address?') && setAddresses(prev => prev.filter(a => a.id !== addr.id))} className="text-sm text-red-600 hover:text-red-800">Delete</button>
                </div>
              </div>
              <p className="text-gray-600 mb-1">{addr.phone}</p>
              <p className="text-gray-700">{addr.address}</p>
            </div>
            {!addr.isDefault && <button onClick={() => handleSetDefault(addr.id)} className="w-full py-2 border border-black text-black rounded-lg hover:bg-primary hover:text-white">Deliver Here</button>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddressPage